import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1997Component } from './test-component1997.component';

describe('TestComponent1997Component', () => {
  let component: TestComponent1997Component;
  let fixture: ComponentFixture<TestComponent1997Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1997Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
