import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent798Component } from './test-component798.component';

describe('TestComponent798Component', () => {
  let component: TestComponent798Component;
  let fixture: ComponentFixture<TestComponent798Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent798Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
