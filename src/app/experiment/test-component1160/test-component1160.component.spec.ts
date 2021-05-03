import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1160Component } from './test-component1160.component';

describe('TestComponent1160Component', () => {
  let component: TestComponent1160Component;
  let fixture: ComponentFixture<TestComponent1160Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1160Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
