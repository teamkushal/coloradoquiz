import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2245Component } from './test-component2245.component';

describe('TestComponent2245Component', () => {
  let component: TestComponent2245Component;
  let fixture: ComponentFixture<TestComponent2245Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2245Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
