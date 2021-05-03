import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3063Component } from './test-component3063.component';

describe('TestComponent3063Component', () => {
  let component: TestComponent3063Component;
  let fixture: ComponentFixture<TestComponent3063Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3063Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
