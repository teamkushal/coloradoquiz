import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1432Component } from './test-component1432.component';

describe('TestComponent1432Component', () => {
  let component: TestComponent1432Component;
  let fixture: ComponentFixture<TestComponent1432Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1432Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
