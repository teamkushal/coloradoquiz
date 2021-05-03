import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1794Component } from './test-component1794.component';

describe('TestComponent1794Component', () => {
  let component: TestComponent1794Component;
  let fixture: ComponentFixture<TestComponent1794Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1794Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
