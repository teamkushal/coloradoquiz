import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1977Component } from './test-component1977.component';

describe('TestComponent1977Component', () => {
  let component: TestComponent1977Component;
  let fixture: ComponentFixture<TestComponent1977Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1977Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
