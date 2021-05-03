import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent68Component } from './test-component68.component';

describe('TestComponent68Component', () => {
  let component: TestComponent68Component;
  let fixture: ComponentFixture<TestComponent68Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent68Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
