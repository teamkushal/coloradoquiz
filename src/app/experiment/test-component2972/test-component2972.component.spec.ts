import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2972Component } from './test-component2972.component';

describe('TestComponent2972Component', () => {
  let component: TestComponent2972Component;
  let fixture: ComponentFixture<TestComponent2972Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2972Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
