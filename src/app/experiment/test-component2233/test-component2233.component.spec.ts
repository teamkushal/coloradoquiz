import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2233Component } from './test-component2233.component';

describe('TestComponent2233Component', () => {
  let component: TestComponent2233Component;
  let fixture: ComponentFixture<TestComponent2233Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2233Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
