import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3401Component } from './test-component3401.component';

describe('TestComponent3401Component', () => {
  let component: TestComponent3401Component;
  let fixture: ComponentFixture<TestComponent3401Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3401Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
