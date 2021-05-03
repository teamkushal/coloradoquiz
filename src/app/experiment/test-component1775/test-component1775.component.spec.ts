import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1775Component } from './test-component1775.component';

describe('TestComponent1775Component', () => {
  let component: TestComponent1775Component;
  let fixture: ComponentFixture<TestComponent1775Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1775Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
