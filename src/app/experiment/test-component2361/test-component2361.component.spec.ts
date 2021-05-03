import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2361Component } from './test-component2361.component';

describe('TestComponent2361Component', () => {
  let component: TestComponent2361Component;
  let fixture: ComponentFixture<TestComponent2361Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2361Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
