import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1991Component } from './test-component1991.component';

describe('TestComponent1991Component', () => {
  let component: TestComponent1991Component;
  let fixture: ComponentFixture<TestComponent1991Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1991Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
