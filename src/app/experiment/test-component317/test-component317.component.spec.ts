import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent317Component } from './test-component317.component';

describe('TestComponent317Component', () => {
  let component: TestComponent317Component;
  let fixture: ComponentFixture<TestComponent317Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent317Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
