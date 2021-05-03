import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1942Component } from './test-component1942.component';

describe('TestComponent1942Component', () => {
  let component: TestComponent1942Component;
  let fixture: ComponentFixture<TestComponent1942Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1942Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
