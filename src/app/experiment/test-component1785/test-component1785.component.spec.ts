import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1785Component } from './test-component1785.component';

describe('TestComponent1785Component', () => {
  let component: TestComponent1785Component;
  let fixture: ComponentFixture<TestComponent1785Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1785Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
