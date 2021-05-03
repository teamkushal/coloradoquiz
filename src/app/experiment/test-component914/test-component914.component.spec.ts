import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent914Component } from './test-component914.component';

describe('TestComponent914Component', () => {
  let component: TestComponent914Component;
  let fixture: ComponentFixture<TestComponent914Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent914Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
