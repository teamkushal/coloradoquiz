import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1064Component } from './test-component1064.component';

describe('TestComponent1064Component', () => {
  let component: TestComponent1064Component;
  let fixture: ComponentFixture<TestComponent1064Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1064Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
