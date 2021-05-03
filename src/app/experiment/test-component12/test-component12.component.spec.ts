import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent12Component } from './test-component12.component';

describe('TestComponent12Component', () => {
  let component: TestComponent12Component;
  let fixture: ComponentFixture<TestComponent12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
