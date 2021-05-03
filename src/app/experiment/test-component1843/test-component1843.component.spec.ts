import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1843Component } from './test-component1843.component';

describe('TestComponent1843Component', () => {
  let component: TestComponent1843Component;
  let fixture: ComponentFixture<TestComponent1843Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1843Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
