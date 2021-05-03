import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent922Component } from './test-component922.component';

describe('TestComponent922Component', () => {
  let component: TestComponent922Component;
  let fixture: ComponentFixture<TestComponent922Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent922Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
