import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1453Component } from './test-component1453.component';

describe('TestComponent1453Component', () => {
  let component: TestComponent1453Component;
  let fixture: ComponentFixture<TestComponent1453Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1453Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
