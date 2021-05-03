import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3577Component } from './test-component3577.component';

describe('TestComponent3577Component', () => {
  let component: TestComponent3577Component;
  let fixture: ComponentFixture<TestComponent3577Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3577Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
