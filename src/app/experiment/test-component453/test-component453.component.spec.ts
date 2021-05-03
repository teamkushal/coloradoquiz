import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent453Component } from './test-component453.component';

describe('TestComponent453Component', () => {
  let component: TestComponent453Component;
  let fixture: ComponentFixture<TestComponent453Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent453Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
