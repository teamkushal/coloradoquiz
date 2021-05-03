import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1996Component } from './test-component1996.component';

describe('TestComponent1996Component', () => {
  let component: TestComponent1996Component;
  let fixture: ComponentFixture<TestComponent1996Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1996Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
