import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent302Component } from './test-component302.component';

describe('TestComponent302Component', () => {
  let component: TestComponent302Component;
  let fixture: ComponentFixture<TestComponent302Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent302Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
