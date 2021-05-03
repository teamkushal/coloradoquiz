import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1898Component } from './test-component1898.component';

describe('TestComponent1898Component', () => {
  let component: TestComponent1898Component;
  let fixture: ComponentFixture<TestComponent1898Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1898Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
