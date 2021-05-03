import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1750Component } from './test-component1750.component';

describe('TestComponent1750Component', () => {
  let component: TestComponent1750Component;
  let fixture: ComponentFixture<TestComponent1750Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1750Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
