import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1849Component } from './test-component1849.component';

describe('TestComponent1849Component', () => {
  let component: TestComponent1849Component;
  let fixture: ComponentFixture<TestComponent1849Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1849Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
