import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2040Component } from './test-component2040.component';

describe('TestComponent2040Component', () => {
  let component: TestComponent2040Component;
  let fixture: ComponentFixture<TestComponent2040Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2040Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
