import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3066Component } from './test-component3066.component';

describe('TestComponent3066Component', () => {
  let component: TestComponent3066Component;
  let fixture: ComponentFixture<TestComponent3066Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3066Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
