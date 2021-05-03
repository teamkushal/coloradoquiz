import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent760Component } from './test-component760.component';

describe('TestComponent760Component', () => {
  let component: TestComponent760Component;
  let fixture: ComponentFixture<TestComponent760Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent760Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
