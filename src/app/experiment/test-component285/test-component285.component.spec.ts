import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent285Component } from './test-component285.component';

describe('TestComponent285Component', () => {
  let component: TestComponent285Component;
  let fixture: ComponentFixture<TestComponent285Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent285Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
