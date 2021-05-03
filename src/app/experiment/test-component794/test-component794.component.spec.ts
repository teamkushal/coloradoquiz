import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent794Component } from './test-component794.component';

describe('TestComponent794Component', () => {
  let component: TestComponent794Component;
  let fixture: ComponentFixture<TestComponent794Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent794Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
