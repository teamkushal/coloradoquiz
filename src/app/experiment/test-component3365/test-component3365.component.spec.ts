import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3365Component } from './test-component3365.component';

describe('TestComponent3365Component', () => {
  let component: TestComponent3365Component;
  let fixture: ComponentFixture<TestComponent3365Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3365Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
