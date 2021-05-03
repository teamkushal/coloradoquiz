import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1156Component } from './test-component1156.component';

describe('TestComponent1156Component', () => {
  let component: TestComponent1156Component;
  let fixture: ComponentFixture<TestComponent1156Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1156Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
