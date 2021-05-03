import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1249Component } from './test-component1249.component';

describe('TestComponent1249Component', () => {
  let component: TestComponent1249Component;
  let fixture: ComponentFixture<TestComponent1249Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1249Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
