import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1528Component } from './test-component1528.component';

describe('TestComponent1528Component', () => {
  let component: TestComponent1528Component;
  let fixture: ComponentFixture<TestComponent1528Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1528Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
