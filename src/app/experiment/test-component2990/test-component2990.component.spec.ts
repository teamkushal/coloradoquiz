import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2990Component } from './test-component2990.component';

describe('TestComponent2990Component', () => {
  let component: TestComponent2990Component;
  let fixture: ComponentFixture<TestComponent2990Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2990Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
