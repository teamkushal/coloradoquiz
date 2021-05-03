import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent66Component } from './test-component66.component';

describe('TestComponent66Component', () => {
  let component: TestComponent66Component;
  let fixture: ComponentFixture<TestComponent66Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent66Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
