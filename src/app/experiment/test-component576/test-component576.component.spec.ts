import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent576Component } from './test-component576.component';

describe('TestComponent576Component', () => {
  let component: TestComponent576Component;
  let fixture: ComponentFixture<TestComponent576Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent576Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
