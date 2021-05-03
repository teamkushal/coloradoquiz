import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent367Component } from './test-component367.component';

describe('TestComponent367Component', () => {
  let component: TestComponent367Component;
  let fixture: ComponentFixture<TestComponent367Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent367Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
