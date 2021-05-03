import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1821Component } from './test-component1821.component';

describe('TestComponent1821Component', () => {
  let component: TestComponent1821Component;
  let fixture: ComponentFixture<TestComponent1821Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1821Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
