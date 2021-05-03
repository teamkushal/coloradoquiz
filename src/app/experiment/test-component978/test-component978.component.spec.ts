import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent978Component } from './test-component978.component';

describe('TestComponent978Component', () => {
  let component: TestComponent978Component;
  let fixture: ComponentFixture<TestComponent978Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent978Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
