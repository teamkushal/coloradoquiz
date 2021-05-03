import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2076Component } from './test-component2076.component';

describe('TestComponent2076Component', () => {
  let component: TestComponent2076Component;
  let fixture: ComponentFixture<TestComponent2076Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2076Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
