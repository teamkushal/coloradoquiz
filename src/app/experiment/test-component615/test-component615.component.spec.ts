import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent615Component } from './test-component615.component';

describe('TestComponent615Component', () => {
  let component: TestComponent615Component;
  let fixture: ComponentFixture<TestComponent615Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent615Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
