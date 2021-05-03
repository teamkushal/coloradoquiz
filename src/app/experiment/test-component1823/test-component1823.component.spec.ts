import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1823Component } from './test-component1823.component';

describe('TestComponent1823Component', () => {
  let component: TestComponent1823Component;
  let fixture: ComponentFixture<TestComponent1823Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1823Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
