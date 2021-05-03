import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent78Component } from './test-component78.component';

describe('TestComponent78Component', () => {
  let component: TestComponent78Component;
  let fixture: ComponentFixture<TestComponent78Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent78Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
