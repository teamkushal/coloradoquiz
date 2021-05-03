import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent401Component } from './test-component401.component';

describe('TestComponent401Component', () => {
  let component: TestComponent401Component;
  let fixture: ComponentFixture<TestComponent401Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent401Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
