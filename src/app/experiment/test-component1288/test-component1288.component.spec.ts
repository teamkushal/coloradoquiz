import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1288Component } from './test-component1288.component';

describe('TestComponent1288Component', () => {
  let component: TestComponent1288Component;
  let fixture: ComponentFixture<TestComponent1288Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1288Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
