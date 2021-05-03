import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent188Component } from './test-component188.component';

describe('TestComponent188Component', () => {
  let component: TestComponent188Component;
  let fixture: ComponentFixture<TestComponent188Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent188Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
