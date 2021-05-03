import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2991Component } from './test-component2991.component';

describe('TestComponent2991Component', () => {
  let component: TestComponent2991Component;
  let fixture: ComponentFixture<TestComponent2991Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2991Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
